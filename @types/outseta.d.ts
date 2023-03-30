declare global {
    interface Window {
      Outseta: {
        auth: {
          open: (options: any) => void;
        };
      };
    }
  }