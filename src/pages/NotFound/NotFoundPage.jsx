
const NotFoundPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="text-center">
        <h1 className="text-danger">404 - Page Not Found</h1>
        <p className="text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    </div>
  );
};

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
