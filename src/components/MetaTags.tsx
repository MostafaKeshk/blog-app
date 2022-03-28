import Head from 'next/head';

type IProp = {
  title: string;
  description?: string;
  imageUrl?: string;
};

const MetaTags: React.FC<IProp> = ({ title, description, imageUrl }) => {
  const isTwitter = !!title && !!description && !!imageUrl;

  return (
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>{title}</title>
      {!!description && <meta name="description" content={description} />}

      {isTwitter && (
        <>
          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={imageUrl} />

          {/* FaceBook */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={imageUrl} />
        </>
      )}
    </Head>
  );
};

export default MetaTags;
