# nginx

## 日志配置
`log_format  main  '$server_addr ; $server_name ; $server_port ; $server_protocol ; $upstream_addr ; $request ; $http_x_forwarded_for $proxy_add_x_forwarded_for';`
- `$http_x_forwarded_for`
- `$proxy_add_x_forwarded_for`