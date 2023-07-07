import { createContext, FC, ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

interface IMainProvider {
  children: ReactNode;
}

interface IMainContext {
  queryClient: QueryClient;
}

const MainContext = createContext<IMainContext | undefined>(undefined);

const MainProvider: FC<IMainProvider> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const contextValue: IMainContext = {
    queryClient,
  };

  return (
    <MainContext.Provider value={contextValue}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MainContext.Provider>
  );
};

export { MainProvider, MainContext };
