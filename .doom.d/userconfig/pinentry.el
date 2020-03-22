;;; ~/git/dotfiles/.doom.d/userconfig/pinentry.el -*- lexical-binding: t; -*-

;; Enable loopback so that pinentry will pop up in emacs
(setq epa-pinentry-mode 'loopback)
(pinentry-start)

;; Update the TTY for gpg-agent
(setenv "GPG_TTY" "/dev/pts/0")
(shell-command "gpg-connect-agent updatestartuptty /bye >/dev/null")
