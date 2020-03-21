# .bashrc

C_DEFAULT="\[\033[m\]"
C_BOLD="\033[1m"

C_GREEN="\[\033[32m\]"
C_YELLOW="\[\033[33m\]"
C_ORANGE="\[\033[35m\]"
C_RED="\[\033[31m\]"
C_BLUE="\[\033[34m\]"
C_VIOLET="\[\033[36m\]"

# Use GPG-agent for SSH authentication
export SSH_AUTH_SOCK=$(gpgconf --list-dirs agent-ssh-socket)
gpgconf --launch gpg-agent

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# Alias
#alias ls='ls --color=auto --group-directories-first -lAhgG'

# Prompt
prompt_generator() {

  local lc="$?" # exit code of last command
  local ar      # arrow
  local ps      # pathstring
  local ms      # timestring (milliseconds or seconds)
  local tc      # timecolor

  ms=$(( ($(prompt_timestamp) - ${_t_prompt:-}) / 1000000 ))

  # different foreground color for the time
  # depending on the execution time.
  case $((
    ms <= 20   ? 1 :
    ms <= 150  ? 2 :
    ms <= 400  ? 3 :
    ms <= 600  ? 4 :
    ms <= 999  ? 5 : 6)) in
      (1)   tc="${C_GREEN}"   ;;
      (2)   tc="${C_YELLOW}"  ;;
      (3)   tc="${C_ORANGE}"    ;;
      (4)   tc="${C_RED}"    ;;
      (5)   tc="${C_VIOLET}" ;;
      # when more then 1000 ms have elapsed,
      # display seconds, (ms/1000), instead.
      (6|*) tc="${C_BOLD}${C_RED}" ms=$((ms/1000)) ;;
  esac

  # format time, 3 characters pad with zero
  # (ms = 42 -> 042)
  ms="$(printf '%03d' $ms)"

  # if the current directory has changed since the
  # last prompt, generate a new ps.
  if [[ $_last_promptdir = "$PWD" ]]; then
    ps="$_last_pathstring"
  else
    # set IFS to forward slash to conveniently
    # loop path, make it local so we don't replace
    # the shells main IFS
    local IFS='/'

    # replace homde dir with literal ~ in PWD loop
    # the path and use the first alpha/numeric
    # character OR the first character of each
    # directory.
    for d in ${PWD/~/'~'}; do
      [[ $d =~ [[:alnum:]] ]]         \
        && ps+="${BASH_REMATCH[0]}/"  \
        || ps+="${d:0:1}/"
    done

    # remove trailing / if we are not in root dir
    [[ ${ps} = / ]] || {
      ps="${ps%/}"

      # expand the last directory
      # [[ $ps != '~' ]] && ps="${ps%/*}/$d"
    }

    unset d

    # these variables are global
    _last_promptdir="$PWD"
    _last_pathstring="$ps"
  fi

  [[ $lc == 0 ]] && ar="${C_DEFAULT}⇢${C_DEFAULT}" \
      || ar="${C_RED}⇢${C_DEFAULT}"

  # if PWD is ~/.config/temp and the last commands
  # execution time was 69ms, the prompt would look
  # something like this:
  # 069 ~/c/t >
  PS1="${tc}${ms}${C_DEFAULT} ${ps} ${ar} "

  unset _t_prompt
}

prompt_timestamp() { date +%s%N ;}

# DEBUG trap will get executed before a command
trap ': "${_t_prompt:=$(prompt_timestamp)}"' DEBUG

# the PROMPT_COMMAND (prompt_generator) is
# executed before a new prompt is to be printed.
# By comparing the last timestamp set with the
# DEBUG trap we get a good approximation of the
# execution time of the last command.
PROMPT_COMMAND=prompt_generator
