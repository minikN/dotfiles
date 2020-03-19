# .bashrc

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# Alias
alias ls='ls --color=auto --group-directories-first -lAhgG'

# Prompt
PS1='[\u@\h \W]\$ '
