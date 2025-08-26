import { ChevronRight, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useNotifications } from '@/context/NotificationsContext'

export default function NotificationsPage() {
  const { notifications, unreadCount } = useNotifications()

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex justify-between items-center px-4 py-3 bg-white">
        <Link to="/" className="text-teal-700 text-lg">&larr;</Link>
        <h1 className="text-xl font-semibold">Notifications</h1>
        <div />
      </div>

      <div className="px-4 mt-3">
        <div className="flex items-center space-x-3">
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-3 flex items-center space-x-2">
            <Search className="w-5 h-5 text-gray-500" />
            <span className="text-gray-500 text-sm">Search</span>
          </div>
          <button className="rounded-xl border px-4 py-3 bg-white text-gray-700">Filter</button>
        </div>

        <div className="flex items-center space-x-6 mt-5 border-b">
          <div className="relative pb-3">
            <span className="text-teal-700 font-semibold">Messages</span>
            <span className="ml-2 bg-teal-700 text-white text-xs rounded-full px-2 py-0.5">{unreadCount}</span>
            <div className="h-0.5 bg-teal-700 absolute left-0 right-0 -bottom-px" />
          </div>
          <div className="relative pb-3 text-gray-500">
            <span>Activity</span>
            <span className="ml-2 bg-teal-700/20 text-teal-900 text-xs rounded-full px-2 py-0.5">2</span>
          </div>
        </div>
      </div>

      <div className="mt-2 divide-y">
        {notifications.map((n) => (
          <div key={n.id} className="bg-white px-4 py-5">
            <div className="flex items-center">
              <img src={n.avatar} alt={n.name} className="w-12 h-12 rounded-full" />
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">{n.name}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-sm">{n.time}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm">{n.role}</p>
                <p className={n.unread ? 'text-teal-700 font-medium mt-1' : 'text-gray-400 mt-1'}>
                  {n.preview}
                </p>
              </div>
              {n.unread ? <span className="ml-3 w-3 h-3 bg-teal-700 rounded-full" /> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
