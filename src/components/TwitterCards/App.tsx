export const App = ({
  site,
  appNameIPhone,
  appIdIPhone,
  appUrlIPhone,
  appNameIPad,
  appIdIPad,
  appUrlIPad,
  appNameGooglePlay,
  appIdGooglePlay,
  appUrlGooglePlay,
}: {
  site: string;
  appNameIPhone?: string;
  appIdIPhone?: string;
  appUrlIPhone?: string;
  appNameIPad?: string;
  appIdIPad?: string;
  appUrlIPad?: string;
  appNameGooglePlay?: string;
  appIdGooglePlay?: string;
  appUrlGooglePlay?: string;
}) => {
  return (
    <>
      <meta name="twitter:card" content="app" />
      <meta name="twitter:site" content={site} />
      {appNameIPhone && (
        <meta name="twitter:app:name:iphone" content={appNameIPhone} />
      )}
      {appIdIPhone && (
        <meta name="twitter:app:id:iphone" content={appIdIPhone} />
      )}
      {appUrlIPhone && (
        <meta name="twitter:app:url:iphone" content={appUrlIPhone} />
      )}
      {appNameIPad && (
        <meta name="twitter:app:name:ipad" content={appNameIPad} />
      )}
      {appIdIPad && <meta name="twitter:app:id:ipad" content={appIdIPad} />}
      {appUrlIPad && <meta name="twitter:app:url:ipad" content={appUrlIPad} />}
      {appNameGooglePlay && (
        <meta name="twitter:app:name:googleplay" content={appNameGooglePlay} />
      )}
      {appIdGooglePlay && (
        <meta name="twitter:app:id:googleplay" content={appIdGooglePlay} />
      )}
      {appUrlGooglePlay && (
        <meta name="twitter:app:url:googleplay" content={appUrlGooglePlay} />
      )}
    </>
  );
};
