import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarRank = ({data}) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    layout: {
      padding: {
        top: 30,
      },
      border: {
        display: false,
      }
    },
    barThickness: 80,
    categoryPercentage: 0.8, // 이 값을 조정하여 막대 사이의 간격을 조절합니다
  };

  const plugins = [{
    afterDraw: (chart) => {
      const ctx = chart.ctx;
      ctx.save();
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillStyle = 'black';

      chart.data.datasets.forEach((dataset, i) => {
        chart.getDatasetMeta(i).data.forEach((bar, index) => {
          const data = dataset.data[index];
          ctx.fillText(data, bar.x, bar.y - 5);
        });
      });
      ctx.restore();
    }
  }];

  // 차트의 전체 너비 계산 (바 너비 + 간격) * 바 개수 + 여백
  const barCount = data.labels.length;
  const chartWidth = (80 + 40) * barCount + 100; // 100px는 여백을 위한 추가 공간

  return (
    <div style={{ width: `${chartWidth}px`, height: '80vh'}}>
      <Bar data={data} options={options} plugins={plugins} />
    </div>
  );
};

export default BarRank;