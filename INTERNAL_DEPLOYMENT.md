# System Service Setup (Linux)

This guide explains how to set up the `algorithms-cei` server as a background system service using `systemd`. This ensures the server starts automatically on boot and restarts if it crashes.

## Prerequisites
- Linux system with `systemd`.
- Node.js installed at `/usr/bin/node`.
- The project is located at `/home/kira/Yandex.Disk/webapps/algorithms_cei`.

## Installation Steps

1. **Copy the service file** to the systemd configuration directory:
   ```bash
   sudo cp algorithms-cei.service /etc/systemd/system/ -f
   ```

2. **Reload systemd** to register the new service:
   ```bash
   sudo systemctl daemon-reload
   ```

3. **Enable the service** so it starts automatically on boot:
   ```bash
   sudo systemctl enable algorithms-cei.service
   ```

4. **Start the service** immediately:
   ```bash
   sudo systemctl start algorithms-cei.service
   ```

## Management Commands

- **Check Status**:
  ```bash
  sudo systemctl status algorithms-cei.service
  ```

- **Stop Service**:
  ```bash
  sudo systemctl stop algorithms-cei.service
  ```

- **Restart Service**:
  ```bash
  sudo systemctl restart algorithms-cei.service
  ```

- **View Logs**:
  ```bash
  journalctl -u algorithms-cei.service -f
  ```
