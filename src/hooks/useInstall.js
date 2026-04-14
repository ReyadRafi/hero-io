import { useState, useCallback } from "react";
import { getInstalled, saveInstalled } from "../utils/helpers";

const useInstall = (showToast) => {
  const [installedIds, setInstalledIds] = useState(() => getInstalled());

  const isInstalled = useCallback(
    (id) => installedIds.includes(id),
    [installedIds]
  );

  const install = useCallback(
    (app) => {
      if (isInstalled(app.id)) return;
      const updated = [...installedIds, app.id];
      saveInstalled(updated);
      setInstalledIds(updated);
      showToast(`${app.title} installed successfully!`, "success");
    },
    [installedIds, isInstalled, showToast]
  );

  const uninstall = useCallback(
    (app) => {
      const updated = installedIds.filter((i) => i !== app.id);
      saveInstalled(updated);
      setInstalledIds(updated);
      showToast(`${app.title} has been uninstalled.`, "error");
    },
    [installedIds, showToast]
  );

  const refresh = useCallback(() => {
    setInstalledIds(getInstalled());
  }, []);

  return { installedIds, isInstalled, install, uninstall, refresh };
};

export default useInstall;
