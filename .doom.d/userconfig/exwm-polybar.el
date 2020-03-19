;;; ~/.doom.d/userconfig/exwm-polybar.el -*- lexical-binding: t; -*-

;; Start polybar
(defun db/start-polybar (&optional theme)
  "Start polybar."
  (interactive)
  (start-process-shell-command "polybar-msg" nil "polybar-msg cmd quit")
  (start-process-shell-command "polybar" "*polybar*" "polybar left & polybar right"))

;;(db/start-polybar)
(advice-add 'enable-theme :after #'db/start-polybar)

;; Setting workspaces for polybar
(defun dw/polybar-exwm-workspace ()
  (pcase exwm-workspace-current-index
    ;;(0 "%{F#f00} WWW%{F-}    TERM    CODE    AGENDA    MUSIC    CHAT")
    (0 (concat "%{F" THEME_YELLOW "} WWW%{F-}    TERM    CODE    AGENDA    MUSIC    CHAT"))
    (1 (concat " WWW   %{F" THEME_YELLOW "} TERM%{F-}    CODE    AGENDA    MUSIC    CHAT"))
    (2 (concat " WWW    TERM   %{F" THEME_YELLOW "} CODE%{F-}    AGENDA    MUSIC    CHAT"))
    (3 (concat " WWW    TERM    CODE   %{F" THEME_YELLOW "} AGENDA%{F-}    MUSIC    CHAT"))
    (4 (concat " WWW    TERM    CODE    AGENDA   %{F" THEME_YELLOW "} MUSIC%{F-}    CHAT"))
    (5 (concat " WWW    TERM    CODE    AGENDA    MUSIC   %{F" THEME_YELLOW "} CHAT%{F-}"))))

;; Hook for Polybar to update workspaces
(defun dw/send-polybar-hook (name number)
  (start-process-shell-command "polybar-msg" nil (format "polybar-msg hook %s %s" name number)))

;; Send the hook above to polybar
(defun dw/update-polybar-exwm ()
  (dw/send-polybar-hook "exwm" 1))

;; Send the hook every time a workspace changes.
(add-hook 'exwm-workspace-switch-hook #'dw/update-polybar-exwm)
