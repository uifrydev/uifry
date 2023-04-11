declare global {
    interface Window {
      onSignupSuccess: () => void;
      Outseta: {
        auth: {
          open: (options: any) => void;
        };
      };
    }
  }