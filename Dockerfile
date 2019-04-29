FROM node:10-jessie

RUN echo "export PS1=\"\[\033[36m\]\u\[\033[m\]@\[\033[32m\]\h:\[\033[33;1m\]\w\[\033[m\]\$ \"" >> .bashrc
RUN echo "export CLICOLOR=1" >> .bashrc
RUN echo "export LSCOLORS=ExFxBxDxCxegedabagacad" >> .bashrc

EXPOSE 3000
# hmr port
EXPOSE 35729

WORKDIR /usr/src
