import React from 'react';
import { Amplitude } from '@amplitude/react-amplitude';
import { useAmplitude } from 'react-amplitude-hooks';

export const ipoLinkAddress = {
  href: 'https://app.stoqey.com',
  target: '_blank',
};

export const TLink = (props) => {
  // const { instrument, logEvent } = useAmplitude((inheritedProps) => ({
  //   ...inheritedProps,
  //   scope: [...inheritedProps.scope, "square"],
  // }));
  const eventName = (props && props.title) || 'landing_link';

  if (process.browser) {
    return (
      <Amplitude
        eventProperties={(inheritedProps) => ({
          ...inheritedProps,
          scope: 'website',
          eventName,
        })}
      >
        {({ logEvent }) => (
          <a
            {...props}
            {...ipoLinkAddress}
            // href="#"
            onClick={() => {
              logEvent(eventName);
            }}
          />
        )}
      </Amplitude>
    );
  }

  return <a {...props} {...ipoLinkAddress} />;
};
