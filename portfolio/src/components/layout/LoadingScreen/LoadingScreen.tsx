"use-client"

import './LoadingScreen.css';

export default function LoadingScreen({ isFirstJoin } : {isFirstJoin : boolean}) {
  return (
    <div className="loading-screen">
      {isFirstJoin && (
        <div className="loading-text">
          <h1>ekaterina potapova</h1>
          <h2>Multidisciplinary Designer & Motion Artist</h2>
        </div>
      )}
    </div>
  );
}
