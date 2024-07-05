type userType = {
  id: number;
  name: string;
}

export default function ApiSample() {
  const callApi = async () => {
    const url = "./api-sample";
    const res = await fetch(url);
    const sampleData: userType = await res.json();
    console.warn(sampleData);
  }

  return (
    <>
      <button onClick={callApi}>APIを呼び出す</button>
    </>
  )
}