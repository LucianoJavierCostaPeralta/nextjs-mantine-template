"use client";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { RootStyleRegistry } from "./emotion/EmotionRootStyleRegistry";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { LoadingOverlay, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import { Router } from "next/router";
import { theme } from "./theme";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setLoading(false);
    });

    Router.events.on("routeChangeError", () => setLoading(false));
  });

  return (
    <RootStyleRegistry>
      <MantineEmotionProvider>
        <MantineProvider stylesTransform={emotionTransform} theme={theme}>
          <LoadingOverlay
            visible={loading}
            zIndex={1000}
            style={{ position: "fixed" }}
          />

          <Notifications />
          <ModalsProvider>
            <>
              <ProgressBar
                height="2px"
                color={"#13a4a4"}
                options={{ showSpinner: false }}
                shallowRouting
              />
              {children}
            </>
          </ModalsProvider>
        </MantineProvider>
      </MantineEmotionProvider>
    </RootStyleRegistry>
  );
}

export default Providers;
