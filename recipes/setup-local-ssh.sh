
local append ~/.ssh/config.test:
  Host <%= server.host %>
    Hostname <%= server.hostname %>
    Port <%= server.port %>
    IdentityFile <%= server.privateKey %>
    StrictHostKeyChecking no