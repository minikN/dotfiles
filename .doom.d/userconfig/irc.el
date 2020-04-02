;;; ~/git/dotfiles/.doom.d/userconfig/irc.el -*- lexical-binding: t; -*-

(after! circe
  (set-irc-server! "chat.freenode.net"
    `(:tls t
      :port 6697
      :nick "minikN"
      :sasl-username "minikN"
      :sasl-password "dasboo"
      :channels ("#emacs"))))
