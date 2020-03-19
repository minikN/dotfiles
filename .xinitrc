xsetroot -cursor_name left_ptr
xset r rate 200 60

export VISUAL=emacsclient
export EDITOR="$VISUAL"

exec dbus-launch --exit-with-session picom & emacs
