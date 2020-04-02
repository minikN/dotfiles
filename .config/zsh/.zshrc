# Modules
zmodload zsh/mathfunc

# Functions
autoload -U colors && colors
autoload -Uz compinit

# Exports
source $ZDOTDIR/exports.zsh

# Prompt
source $ZDOTDIR/prompt.zsh

# Aliases
source $ZDOTDIR/aliases.zsh

# Lines configured by zsh-newuser-install
HISTFILE=$XDG_CONFIG_HOME/zsh/history
HISTSIZE=1000
SAVEHIST=1000
bindkey -e

# Auto completion
zstyle :compinstall filename '$ZDOTDIR/.zshrc'
compinit -d $XDG_CACHE_HOME/zsh/zcompdump-$ZSH_VERSION
_comp_options+=(globdots)

source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh 2>/dev/null
