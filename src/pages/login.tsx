import { useBaseComponent } from '@base/BaseComponent';
import { updateAuthState } from '@redux/slices/authentication/AuthenticationSlice';
import { Url } from 'next/dist/shared/lib/router/router';

function login() {
  const { dispatch, router, isAuthenticated } = useBaseComponent();
  const { query } = router;
  if (isAuthenticated) {
    return router.back();
  }

  const loginHandler = () => {
    dispatch(updateAuthState({ userToken: 'test token' }));
    if (query && query.return) {
      router.push(query.return as Url); // Cast query.return to Url type
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-[24px] font-bold">
          Click to Bypass Authentication.
        </h2>
        <button
          onClick={loginHandler}
          className="bg-violet-500 rounded px-2 py-1 text-white font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default login;
