import hash from "./../hash/index.js"

export default function generateWallet () {
  const random = () => Math.random().toString(16).slice(-10)
  const timestamp = Date.now()

  return {
    public: hash("public" + random() + timestamp),
    private: hash("private" + random() + timestamp)
  }
}
