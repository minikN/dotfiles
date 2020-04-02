# PATH
export PATH=$HOME/bin:$PATH

# General exports
export SSH_AUTH_SOCK=$(gpgconf --list-dirs agent-ssh-socket)
#export GPG_TTY=$(tty)
#gpgconf --kill gpg-agent # Kill the agent if already started
#gpg-connect-agent /bye

# XDG related exports
export GNUPGHOME="$XDG_DATA_HOME/gnupg"
export NPM_CONFIG_USERCONFIG="$XDG/CONFIG_HOME/npm/npmrc"
export CUDA_CACHE_PATH="$XDG_CACHE_HOME/nv"
export XAUTHORITY="$XDG_RUNTIME_DIR/Xauthority"
export XINITRC="$XDG_CONFIG_HOME/X11/xinitrc"
export XSERVERRC="$XDG_CONFIG_HOME/X11/xserverrc"
export INPUTRC="$XDG_CONFIG_HOME/readline/inputrc"
export WGETRC="$XDG_CONFIG_HOME/wgetrc"
