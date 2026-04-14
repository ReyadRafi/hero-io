import React, { useState, useCallback } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";
import AppsPage from "./pages/AppsPage";
import AppDetailsPage from "./pages/AppDetailsPage";
import InstallationPage from "./pages/InstallationPage";
import NotFoundPage from "./pages/NotFoundPage";
import useToast from "./hooks/useToast";
import useInstall from "./hooks/useInstall";

const App = () => {
  const [page, setPage] = useState("home");
  const [appId, setAppId] = useState(null);
  const [pageLoading, setPageLoading] = useState(false);

  const { toast, showToast, hideToast } = useToast();
  const { installedIds, isInstalled, install, uninstall } =
    useInstall(showToast);

  // Navigate between pages with a brief loading flash
  const navigate = useCallback((target, id = null) => {
    setPageLoading(true);
    setTimeout(() => {
      setPage(target);
      setAppId(id);
      setPageLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  }, []);

  const renderPage = () => {
    if (pageLoading) return <Loader />;

    switch (page) {
      case "home":
        return <HomePage onNavigate={navigate} />;

      case "apps":
        return <AppsPage onNavigate={navigate} />;

      case "app-details":
        return (
          <AppDetailsPage
            appId={appId}
            onNavigate={navigate}
            isInstalled={isInstalled}
            onInstall={install}
          />
        );

      case "installation":
        return (
          <InstallationPage
            onNavigate={navigate}
            installedIds={installedIds}
            onUninstall={uninstall}
          />
        );

      default:
        return <NotFoundPage onNavigate={navigate} />;
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
        background: "#F9FAFB",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header page={page} onNavigate={navigate} />

      <main style={{ flex: 1 }}>{renderPage()}</main>

      <Footer onNavigate={navigate} />

      {toast && (
        <Toast
          key={toast.key}
          msg={toast.msg}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </div>
  );
};

export default App;
