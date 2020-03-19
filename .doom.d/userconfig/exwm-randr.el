;;; ~/.doom.d/userconfig/exwm-randr.el -*- lexical-binding: t; -*-

(require 'exwm-randr)
(setq exwm-randr-workspace-output-plist '(0 "DP-0.8" 1 "DP-0.1.8" 2 "DP-0.1.8" 3 "DP-0.8" 4 "DP-0.8" 5 "DP-0.8"))
(add-hook 'exwm-randr-screen-change-hook
          (lambda ()
            (start-process-shell-command
             "xrandr" nil "xrandr --output VGA1 --left-of LVDS1 --auto")))
(exwm-randr-enable)
