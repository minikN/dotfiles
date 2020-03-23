# .bash_profile

# Get the aliases and functions
[ -f $HOME/.bashrc ] && . $HOME/.bashrc

# GPG related
export SSH_AUTH_SOCK=$(gpgconf --list-dirs agent-ssh-socket)
#export GPG_TTY=$(tty)
#gpgconf --launch gpg-agent
