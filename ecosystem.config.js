module.exports = {
  apps: [
    {
      name: "aws-study-server",
      script: "./dist/main.js",
      instances: 3,
      exec_mode: "cluster",
      wait_ready: true, // ready 이벤트 대기 유무
      listen_timeout: 10000, // ready 이벤트 대기 시간
      shutdown_with_message: true,
      kill_retry_time: 1000,
      kill_timeout: 1000, // SIGINT 보낸 후 SIGKILL 을 보내기까지의 시간
      watch: false,
      autorestart: false,
      merge_logs: true,
      env: {
        eco_system: true,
      },
      env_production: {
        eco_system: true,
      },
    },
  ],
};
