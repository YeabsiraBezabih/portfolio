import { faCode } from '@fortawesome/free-solid-svg-icons'; // For generic code and database
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'; // Correct packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const skills = [
  { icon: faHtml5, name: 'HTML', level: 'Advanced' },
  { icon: faCss3Alt, name: 'CSS', level: 'Advanced' },
  { icon: faJsSquare, name: 'JavaScript', level: 'Advanced' },
  { icon: faReact, name: 'React', level: 'Intermediate' },
  { icon: faNodeJs, name: 'Node.js', level: 'Intermediate' },
  { icon: faCode, name: 'Express', level: 'Intermediate' } // Reused icon here
];

const skillData = {
  labels: skills.map(skill => skill.name),
  datasets: [
    {
      data: skills.map(skill => skill.level === 'Advanced' ? 70 : 30),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', '#9966FF'],
      borderWidth: 1,
    },
  ],
};

const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 12, // Adjust size of legend boxes
        padding: 15, // Adjust padding between legend items
      }
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}%`;
        }
      }
    }
  },
  layout: {
    padding: {
      bottom: 10,
    }
  }
};

const Skills = () => {
  return (
    <section className="p-10 bg-black">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Skills</h2>
      <div className="flex flex-col lg:flex-row lg:gap-8 items-center">
        {/* Skills Cards */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-4 w-full lg:w-1/2">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 shadow-lg rounded-lg bg-gradient-to-t from-[#020024] via-[#090979] to-[#00d4ff] mb-4 w-full lg:w-1/2 xl:w-1/3">
              <FontAwesomeIcon icon={skill.icon} className="text-black text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <p className="text-gray-200">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Pie Chart */}
        <div className="flex items-center justify-center lg:w-1/2">
          <div style={{ width: '300px', height: '300px' }}>
            <Pie data={skillData} options={pieOptions} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
