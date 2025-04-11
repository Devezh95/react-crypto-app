import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { useCrypto } from "../context/crypto-context";

// Регистрируем все необходимые элементы для графика
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

export default function PortfolioChart() {
  const { assets } = useCrypto();

  // Проверка на наличие активов
  if (!assets || assets.length === 0) {
    return <p>No assets available</p>;
  }

  // Генерация уникальных цветов для каждого актива
  const backgroundColors = assets.map((_, index) => {
    const color = `hsl(${(index * 360) / assets.length}, 70%, 60%)`;
    return color;
  });

  const data = {
    labels: assets.map((a) => a.name),
    datasets: [
      {
        label: "$",
        data: assets.map((a) => a.totalAmount),
        backgroundColor: backgroundColors, // Уникальные цвета
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "1rem",
        justifyContent: "center",
        height: 400,
      }}
    >
      <Pie data={data} />
    </div>
  );
}
