Vim�UnDo� (2�2V��U��Thr�� D��;K��r3��:�   ^                                   `86W     _�                              ����                                                                                                                                                                                                                                                                                                                                                             `86V     �               a   3import { g, routers, dia } from '@clientio/rappid';   @import { isPortId, PortId } from '../shapes/ports/port-id.type';   Kimport { gridSize } from '../../../../smart-surface/paper-settings.consts';       export class Router {   7  private cmRouters: Record<string, routers.Router> = {       noop: () => [],       m    closeProximity: (vertices, args, linkView) => this.router(vertices, { padding: 0.1, ...args }, linkView),       1    longDistance: (vertices, args, linkView) => {   O      const sourceOffsetVertex = this.shouldIncludeSourceOffset(linkView.model)   4        ? this.getSourceOffsetVertex(linkView.model)           : undefined;       O      const targetOffsetVertex = this.shouldIncludeTargetOffset(linkView.model)   4        ? this.getTargetOffsetVertex(linkView.model)           : undefined;             return this.router(   N        [sourceOffsetVertex, ...vertices, targetOffsetVertex].filter(Boolean),   !        { padding: 10, ...args },           linkView         );       },     };         public constructor(   /    private readonly offsetFromElement: number,   +    private readonly router: routers.Router     ) {}       N  public run: routers.Router = (vertices, args, linkView): g.PlainPoint[] => {   3    if (this.endsAreWithinOffset(linkView.model)) {   ;      return this.cmRouters.noop(vertices, args, linkView);       }       8    if (this.elementsAreCloseTogether(linkView.model)) {   E      return this.cmRouters.closeProximity(vertices, args, linkView);       }       A    return this.cmRouters.longDistance(vertices, args, linkView);     };       E  private getOffsetVertex = (element: dia.Element, port: string) => {   &    if (!element || !isPortId(port)) {         return;       }       *    const elementBBox = element.getBBox();       ;    const vertexOffset: Record<PortId, dia.Link.Vertex> = {   [      Top: elementBBox.topMiddle().offset(0, -this.offsetFromElement).snapToGrid(gridSize),   ^      Right: elementBBox.rightMiddle().offset(this.offsetFromElement, 0).snapToGrid(gridSize),   `      Bottom: elementBBox.bottomMiddle().offset(0, this.offsetFromElement).snapToGrid(gridSize),   ]      Left: elementBBox.leftMiddle().offset(-this.offsetFromElement, 0).snapToGrid(gridSize),       };           return vertexOffset[port];     };       5  private getSourceOffsetVertex = (link: dia.Link) =>   F    this.getOffsetVertex(link.getSourceElement(), link.source().port);       5  private getTargetOffsetVertex = (link: dia.Link) =>   F    this.getOffsetVertex(link.getTargetElement(), link.target().port);       N  private shouldIncludeOffset = (element: dia.Element, endPoint: g.Point) => {       if (!element) {         return false;       }       n    return !element.getBBox().inflate(this.offsetFromElement, this.offsetFromElement).containsPoint(endPoint);     };       9  private shouldIncludeSourceOffset = (link: dia.Link) =>   M    this.shouldIncludeOffset(link.getSourceElement(), link.getTargetPoint());       9  private shouldIncludeTargetOffset = (link: dia.Link) =>   M    this.shouldIncludeOffset(link.getSourceElement(), link.getTargetPoint());       3  private endsAreWithinOffset = (link: dia.Link) =>   T    link.getSourcePoint().distance(link.getTargetPoint()) <= this.offsetFromElement;       :  private elementsAreCloseTogether = (link: dia.Link) => {   :    const sourceBBox = link.getSourceElement()?.getBBox();   :    const targetBBox = link.getTargetElement()?.getBBox();       %    if (!sourceBBox || !targetBBox) {         return false;       }       =    const closeProximityPadding = this.offsetFromElement * 2;       k    return Boolean(sourceBBox.inflate(closeProximityPadding, closeProximityPadding).intersect(targetBBox));     };   }5��