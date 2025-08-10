import { useEffect, useState, useRef } from "react";

export default function useBattery() {
  const [status, setStatus] = useState({ supported: false, loading: false });
  const batteryManager = useRef(null);

  useEffect(() => {
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
      batteryManager.current = await window.navigator.getBattery();
      updateStatus();
      batteryManager.current?.addEventListener("levelchange", updateStatus);
      batteryManager.current?.addEventListener("chargingchange", updateStatus);
      batteryManager.current?.addEventListener(
        "chargingtimechange",
        updateStatus,
      );
      batteryManager.current?.addEventListener(
        "dischargingtimechange",
        updateStatus,
      );
    }

    async function updateStatus() {
      setStatus({
        supported: true,
        loading: false,
        level: batteryManager.current.level,
        charging: batteryManager.current.charging,
        chargingTime: batteryManager.current.chargingTime,
        dischargingTime: batteryManager.current.dischargingTime,
      });
    }

    initBatteryManager();

    return () => {
      batteryManager.current?.removeEventListener("levelchange", updateStatus);
      batteryManager.current?.removeEventListener(
        "chargingchange",
        updateStatus,
      );
      batteryManager.current?.removeEventListener(
        "chargingtimechange",
        updateStatus,
      );
      batteryManager.current?.removeEventListener(
        "dischargingtimechange",
        updateStatus,
      );
    };
  }, []);
  return status;
}
