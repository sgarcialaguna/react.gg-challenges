import { useEffect, useState, useRef } from "react";

export default function useBattery() {
  const [status, setStatus] = useState({
    supported: false,
    loading: false,
    level: undefined,
    charging: undefined,
    chargingTime: undefined,
    dischargingTime: undefined,
  });

  useEffect(() => {
    let batteryManager = null;

    async function initBatteryManager() {
      if (!window.navigator.getBattery) {
        return;
      }
      setStatus({
        supported: true,
        loading: true,
        level: undefined,
        charging: undefined,
        chargingTime: undefined,
        dischargingTime: undefined,
      });
      batteryManager = await window.navigator.getBattery();
      updateStatus();
      batteryManager.addEventListener("levelchange", updateStatus);
      batteryManager.addEventListener("chargingchange", updateStatus);
      batteryManager.addEventListener("chargingtimechange", updateStatus);
      batteryManager.addEventListener("dischargingtimechange", updateStatus);
    }

    async function updateStatus() {
      setStatus({
        supported: true,
        loading: false,
        level: batteryManager.level,
        charging: batteryManager.charging,
        chargingTime: batteryManager.chargingTime,
        dischargingTime: batteryManager.dischargingTime,
      });
    }

    initBatteryManager();

    return () => {
      if (batteryManager) {
        batteryManager.removeEventListener("levelchange", updateStatus);
        batteryManager.removeEventListener("chargingchange", updateStatus);
        batteryManager.removeEventListener("chargingtimechange", updateStatus);
        batteryManager.removeEventListener(
          "dischargingtimechange",
          updateStatus,
        );
      }
    };
  }, []);
  return status;
}
