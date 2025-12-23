import Text from "./components/text"

export default function App() {

  return (
    <div className="flex flex-col gap-2">
      <Text variant="body-md" className="text-pink-base">olá mundo</Text>
      <Text variant="body-sm-bold" className="text-green-base">olá mundo</Text>
      <Text variant="body-md-bold">Levar dog para passear</Text>
    </div>
  )
}

