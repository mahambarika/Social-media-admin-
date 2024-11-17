import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function Analytics({ analyticsData = [] }) {
  if (!analyticsData || analyticsData.length === 0) {
    return <div className="text-center py-4">No analytics data available</div>
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={analyticsData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="likes" stroke="#82ca9d" />
            <Line type="monotone" dataKey="shares" stroke="#ffc658" />
            <Line type="monotone" dataKey="messages" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}