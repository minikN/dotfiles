;;; ~/.doom.d/userconfig/exwm.el -*- lexical-binding: t; -*-

;; Functions to toggle normal mode in an x window
(defun exwm/enter-normal-state ()
  "Foward all commands to emacs by simulating normal mode"
  (interactive)
  (setq exwm-input-line-mode-passthrough t)
  (evil-normal-state))

(defun exwm/escape ()
  "Switch to normal state, and cancel possible fullscreen layout.  Also close minibuffer."
  (interactive)
  (exwm/enter-normal-state)
  (exwm-layout-unset-fullscreen)
  (when (active-minibuffer-window)
    (minibuffer-keyboard-quit)))

(defun exwm/enter-insert-state ()
  "Focus the x window again by simulating insert mode"
  (interactive)
  (setq exwm-input-line-mode-passthrough nil)
  (evil-insert-state))

;; Emacs server is not required to run EXWM but it has some interesting uses
;; (see next section).
(server-start)

;; Load EXWM.
(require 'exwm)

;; Fix problems with Ido (if you use it).
(require 'exwm-config)

;; Set the initial number of workspaces (they can also be created later).
(setq exwm-workspace-number 6)

;; Use class names for all windows except Java and GIMP
(add-hook 'exwm-update-class-hook
          (lambda ()
            (unless (or (string-prefix-p "sun-awt-X11-" exwm-instance-name)
                        (string= "gimp" exwm-instance-name))
              (exwm-workspace-rename-buffer exwm-class-name))))
(add-hook 'exwm-update-title-hook
          (lambda ()
            (when (or (not exwm-instance-name)
                      (string-prefix-p "sun-awt-X11-" exwm-instance-name)
                      (string= "gimp" exwm-instance-name))
              (exwm-workspace-rename-buffer exwm-title))))

;; Get out of x window
(exwm-input-set-key (kbd "s-<escape>") 'exwm/escape)

;; Set shortcuts to switch to a certain workspace.
(exwm-input-set-key (kbd "s-1")
                    (lambda () (interactive) (exwm-workspace-switch 0)))
(exwm-input-set-key (kbd "s-2")
                    (lambda () (interactive) (exwm-workspace-switch 1)))
(exwm-input-set-key (kbd "s-3")
                    (lambda () (interactive) (exwm-workspace-switch 2)))
(exwm-input-set-key (kbd "s-4")
                    (lambda () (interactive) (exwm-workspace-switch 3)))
(exwm-input-set-key (kbd "s-5")
                    (lambda () (interactive) (exwm-workspace-switch 4)))
(exwm-input-set-key (kbd "s-6")
                    (lambda () (interactive) (exwm-workspace-switch 5)))
(exwm-input-set-key (kbd "s-7")
                    (lambda () (interactive) (exwm-workspace-switch 6)))
(exwm-input-set-key (kbd "s-8")
                    (lambda () (interactive) (exwm-workspace-switch 7)))
(exwm-input-set-key (kbd "s-9")
                    (lambda () (interactive) (exwm-workspace-switch 8)))
(exwm-input-set-key (kbd "s-0")
                    (lambda () (interactive) (exwm-workspace-switch 9)))

;; Enter insert mode to work in x window again
(evil-define-key 'normal exwm-mode-map (kbd "i") 'exwm/enter-insert-state)

;; Global key bindings
(setq exwm-input-global-keys
      `(
        ;; Bind "s-r" to exit char-mode and fullscreen mode.
        ([?\s-r] . exwm-reset)
        ([?\s-w] . exwm-workspace-switch)
        ([?\s-&] . (lambda (command)
                     (interactive (list (read-shell-command "$ ")))
                     (start-process-shell-command command nil command)))
        ))

;; set char-mode to default
(setq exwm-manage-configurations '((t char-mode t)))

;; Enable EXWM
(exwm-enable)
