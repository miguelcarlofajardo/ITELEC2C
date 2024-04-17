import "./App.css";
import { useState } from "react";
const tempMusicData = [
  {
    id: 1,
    title: "Ngayong Gabi",
    artist: "Al James",
    genre: "Hiphop",
  },
  {
    id: 2,
    title: "Pauwi Nako",
    artist: "PDL",
    genre: "Hiphop",
  },
  {
    id: 3,
    title: "Magandang Dilag",
    artist: "Skusta Clee",
    genre: "Hiphop",
  },
  {
    id: 4,
    title: "Marikit",
    artist: "Juan Caoile",
    genre: "Pop",
  },
  {
    id: 5,
    title: "Pasensya Ka Na",
    artist: "Silent Sanctuary",
    genre: "Pop",
  },
  {
    id: 6,
    title: "Vibe With Me",
    artist: "Matthaios",
    genre: "R&B",
  },
  {
    id: 7,
    title: "Catriona",
    artist: "Matthaios",
    genre: "Hiphop",
  },
  {
    id: 8,
    title: "Binibini",
    artist: "Zack Tabudlo",
    genre: "Pop",
  },
  {
    id: 9,
    title: "Pagbigyan Mo Na",
    artist: "Kisses Delavin",
    genre: "Pop",
  },
  {
    id: 10,
    title: "Dahan",
    artist: "December Avenue",
    genre: "Pop Rock",
  },
  {
    id: 11,
    title: "Tayo na Lang Dalawa",
    artist: "Mayonnaise",
    genre: "Pop Rock",
  },
  {
    id: 12,
    title: "Patawad, Paalam",
    artist: "Moira Dela Torre & I Belong to the Zoo",
    genre: "Pop",
  },
  {
    id: 13,
    title: "Ikaw at Ako",
    artist: "Moira Dela Torre",
    genre: "Pop",
  },
  {
    id: 14,
    title: "Sige Lang",
    artist: "Quest",
    genre: "Pop",
  },
  {
    id: 15,
    title: "Kahit Kunwari",
    artist: "TJ Monterde",
    genre: "Pop",
  },
  {
    id: 16,
    title: "Peksman",
    artist: "Siakol",
    genre: "Rock",
  },
  {
    id: 17,
    title: "Dati",
    artist: "Sam Concepcion, Tippy Dos Santos, & Quest",
    genre: "Pop",
  },
  {
    id: 18,
    title: "Buwan",
    artist: "Juan Karlos Labajo",
    genre: "Rock",
  },
  {
    id: 19,
    title: "Tulad Mo",
    artist: "TJ Monterde",
    genre: "Pop",
  },
  {
    id: 20,
    title: "Nadarang",
    artist: "Shanti Dope",
    genre: "Hiphop",
  },
];

function App() {
  const [music, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToPlaylist = (selectedMusic) => {
    const newSong = { ...selectedMusic, userRating: 3 };
    setPlaylist([...playlist, newSong]);
    setMusic(music.filter((item) => item.id !== selectedMusic.id));
  };

  const filteredMusic = music.filter(
    (selectedMusic) =>
      selectedMusic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      selectedMusic.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      selectedMusic.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPlaylist = playlist.filter(
    (music) =>
      music.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      music.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      music.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <Main>
        <Box>
          <Music music={filteredMusic} addToPlaylist={addToPlaylist} />
          <NumResult music={filteredMusic} />
        </Box>
        <Box>
          <Playlist playlist={filteredPlaylist} />
          <PlaylistResult playlist={filteredPlaylist} />
        </Box>
      </Main>
    </>
  );
}

function Navbar({ handleSearch }) {
  return (
    <nav className="navbar-container">
      <Logo />
      <input
        className="search"
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
    </nav>
  );
}

function Logo() {
  return <h1 style={{ textAlign: "center" }}>Music App</h1>;
}

// function Search() {
//   const [query, setQuery] = useState("");

//   return (
//     <input
//       className="search"
//       type="text"
//       placeholder="Search music..."
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//     />
//   );
// }

// function Search({ setSearchQuery }) {
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <nav className="container">
//       <Logo />
//       <input
//         className="search"
//         type="text"
//         placeholder="Search music or playlist..."
//         onChange={handleSearch}
//       />
//     </nav>
//   );
// }

function NumResult({ music }) {
  return (
    <p>
      Found <strong>{music.length}</strong> results
    </p>
  );
}

function PlaylistResult({ playlist }) {
  return (
    <p>
      Found <strong>{playlist.length}</strong> results
    </p>
  );
}

// function MusicListBox({ music }) {
//   return (
//     <div className="container">
//       <h2>Music List</h2>
//       <Music music={music} />
//     </div>
//   );
// }

// function PlaylistBox() {
//   return (
//     <div className="container">
//       <h2>Playlist</h2>
//       <Playlist />
//     </div>
//   );
// }

function Music({ music, addToPlaylist }) {
  const [sortOrder, setSortOrder] = useState("original");

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleAddToPlaylist = (selectedMusic) => {
    addToPlaylist(selectedMusic);
  };

  let sortedMusic = [...music];

  switch (sortOrder) {
    case "asc":
      sortedMusic.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "desc":
      sortedMusic.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      break;
  }

  return (
    <div>
      <h2>All Music</h2>
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" value={sortOrder} onChange={handleSortChange}>
        <option value="original">Custom Order</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <ul>
        {sortedMusic.map((selectedMusic) => (
          <li className="item" key={selectedMusic.id}>
            {selectedMusic.title} by {selectedMusic.artist} (
            {selectedMusic.genre})
            <button onClick={() => handleAddToPlaylist(selectedMusic)}>
              ✓
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Box({ children }) {
  return <div className="container">{children}</div>;
}

function Playlist({ playlist }) {
  const [sortOrder, setSortOrder] = useState("original");

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  let sortedPlaylist = [...playlist];

  switch (sortOrder) {
    case "asc":
      sortedPlaylist.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "desc":
      sortedPlaylist.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      break;
  }

  return (
    <div>
      <h2>Playlist</h2>
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" value={sortOrder} onChange={handleSortChange}>
        <option value="original">Custom Order</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <ul>
        {sortedPlaylist.map((music) => (
          <li class="item" key={music.id}>
            {music.title} by {music.artist}
            <p>
              {[...Array(music.userRating)].map((_, index) => (
                <span key={index}>▷</span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Main({ children }) {
  return (
    <div className="container">
      {/* <MusicListBox music={music} />
      <PlaylistBox /> */}
      {children}
    </div>
  );
}

export default App;
