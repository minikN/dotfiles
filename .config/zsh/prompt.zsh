typeset -Z 7 -F 3 SECONDS

function preexec() {
  timer=${timer:-$SECONDS}
}

function precmd() {
  if [ $timer ]; then
  local ms=$((int(rint(($SECONDS - $timer) * 1000))))
  local ptr="%(?.%F{yellow}.%F{red})⇢%{$reset_color%}"

    case $((
      ms <= 20   ? 1 :
      ms <= 150  ? 2 :
      ms <= 400  ? 3 :
      ms <= 600  ? 4 :
      ms <= 999  ? 5 : 6)) in
        (1)   tc="%F{green}"   ;;
        (2)   tc="%F{yellow}"  ;;
        (3)   tc="%F{magenta}"    ;;
        (4)   tc="%F{red}"    ;;
        (5)   tc="%F{cyan}" ;;
        # when more then 1000 ms have elapsed,
        # display seconds, (ms/1000), instead.
        (6|*) tc="%B%F{red}" ms=$((ms/1000)) ;;
    esac

    ms=$(printf '%03d' ${ms})


    export PROMPT="${tc}${ms}%{$reset_color%} %~ ${ptr} "

    unset timer
  fi
}
