import { Col, Divider, Row } from "antd";
import { useState } from "react";
import Header from "../Components/Header";
import ShortURLBox from "../Components/ShortURLBox";
import TextInputBox from "../Components/TextInputBox";

const Home = () => {
  const [shortURL, setShortURL] = useState();
  return (
    <div className="background">
      <Row justify="center" gutter={[0, 24]}>
        <Col xs={24} sm={24} md={18} lg={20} xl={20}>
          <Header title="Penni URL" />
        </Col>
        <Col xs={24} sm={24} md={18} lg={20} xl={20}>
          <>
            <TextInputBox setShortURL={setShortURL} />
            {shortURL && <ShortURLBox shortURL={shortURL} />}
          </>
        </Col>
        <Divider />
      </Row>
    </div>
  );
};

export default Home;

// import React, { useState } from "react";
// import { Button, Input, Typography, Row, Col } from "antd";
// import { CopyOutlined } from "@ant-design/icons";

// const { Title, Text } = Typography;

// const HomePage = () => {
//   const [longUrl, setLongUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("ff");
//   const [copied, setCopied] = useState(false);

//   const handleUrlShorten = () => {
//     // Implement your URL shortening logic here
//     // Replace the following code with your actual implementation
//     const generatedShortUrl = "https://yourdomain.com/abc123";
//     setShortUrl(generatedShortUrl);
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(shortUrl);
//     setCopied(true);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <div style={{ width: "400px", textAlign: "center" }}>
//         <Title level={2}>URL Shortener Service</Title>

//         <Input
//           placeholder="Enter long URL"
//           value={longUrl}
//           onChange={(e) => setLongUrl(e.target.value)}
//           style={{ marginBottom: "20px" }}
//         />

//         <Button
//           type="primary"
//           onClick={handleUrlShorten}
//           style={{ marginBottom: "20px" }}
//         >
//           Shorten URL
//         </Button>

//         {shortUrl && (
//           <div style={{ marginBottom: "20px" }}>
//             <Input
//               value={shortUrl}
//               addonAfter={
//                 <Button
//                   type="text"
//                   icon={<CopyOutlined />}
//                   onClick={handleCopy}
//                   disabled={copied}
//                 >
//                   {copied ? "Copied!" : "Copy"}
//                 </Button>
//               }
//               readOnly
//             />
//             <Text type="secondary" style={{ fontSize: "12px" }}>
//               Click the copy button to copy the short URL
//             </Text>
//           </div>
//         )}

//         <Text type="secondary">
//           Note: This is a simplified example. Implement your own URL shortening
//           logic in the handleUrlShorten function.
//         </Text>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
