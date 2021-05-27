export PATH="~/.npm-global/bin:/Users/craig/.dotnet/tools:/usr/local/opt/python/libexec/bin:$PATH"

# OH-MY-ZSH
export ZSH="/Users/craig/.oh-my-zsh"
export KEYTIMEOUT=1
ZSH_THEME="xiong-chiamiov-plus"
# VI_MODE_RESET_PROMPT_ON_MODE_CHANGE=true
VI_MODE_SET_CURSOR=true
plugins=(git npm node ng github osx vi-mode)
plugins+=(zsh-better-npm-completion)
source $ZSH/oh-my-zsh.sh

test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh"

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

export GPG_TTY=$(tty)

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

source "/Volumes/Macintosh HD - Data/development/projects/bin/emsdk/emsdk_env.sh" &> /dev/null

alias vim="nvim"
alias oldvim="\vim"
alias webapp_repo="cd \"/Volumes/Macintosh HD - Data/development/projects/WebApp/\""
alias gifme="find . -name '*.mov' -type f -print0 | xargs -0 -I % zsh -c 'gify --scale=900:-1 \"%\" \"%.gif\" && rm \"%\" && echo Converted % to GIF'"
alias gdel="git branch >/tmp/branches && nvim /tmp/branches && xargs git branch -D </tmp/branches"
