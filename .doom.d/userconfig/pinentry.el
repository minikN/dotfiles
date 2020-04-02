;; ;;; ~/git/dotfiles/.doom.d/userconfig/pinentry.el -*- lexical-binding: t; -*-

;; ;; Enable loopback so that pinentry will pop up in emacs
;; (setq epa-pinentry-mode 'loopback)
;; (setq epg-gpg-program "/bin/gpg2")
;; (pinentry-start)

;; ;; Update the TTY for gpg-agent
;; (shell-command "gpgconf --kill gpg-agent")
;; (shell-command "gpg-connect-agent /bye")

;; ;; (defun wg/kludge-gpg-agent ()
;; ;;   (interactive)
;; ;;   (if
;; ;;       (display-graphic-p)
;; ;;       (setenv "DISPLAY"
;; ;;               (terminal-name))
;; ;;     (setenv "GPG_TTY"
;; ;;             (terminal-name))
;; ;;     (setenv "DISPLAY")))
;; ;; (add-hook 'window-configuration-change-hook 'wg/kludge-gpg-agent)
;; (add-hook 'magit-mode-hook (lambda () (shell-command "gpg-connect-agent updatestartuptty /bye >/dev/null")))

(defun pinentry-emacs (desc prompt ok error)
  (let ((str (read-passwd (concat (replace-regexp-in-string "%22" "\"" (replace-regexp-in-string "%0A" "\n" desc)) prompt ": "))))
    str))
