import './App.css'
import { Bell, ChevronRight, Home, FileText, Tag, Menu, Plus, Pill, MessageCircle, Search, Shield, Heart, Target, Brain, Stethoscope, BriefcaseMedical, Plane, CheckSquare, BookOpen } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useNotifications } from './context/NotificationsContext'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs'

function App() {
  const [activeMode, setActiveMode] = useState<'coverage' | 'care'>('care')
  const navigate = useNavigate()
  const { unreadCount } = useNotifications()
  return (
    <div className="min-h-screen bg-teal-800 text-white font-sans">
      <div className="flex justify-between items-center px-4 py-2 text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
          <div className="w-4 h-3 border border-white rounded-sm">
            <div className="w-3 h-2 bg-white rounded-sm m-0.5"></div>
          </div>
          <div className="w-6 h-3 border border-white rounded-sm">
            <div className="w-5 h-2 bg-white rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 py-4">
        <button className="relative" onClick={() => navigate('/notifications')} aria-label="Notifications">
          <Bell className="w-6 h-6" />
          {unreadCount > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount}
            </div>
          )}
        </button>

        <div className="bg-teal-700 rounded-full p-1 flex">
          <button
            onClick={() => setActiveMode('coverage')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeMode === 'coverage'
                ? 'bg-white text-teal-800'
                : 'text-white hover:text-teal-200'
            }`}
          >
            <div className="flex items-center space-x-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Coverage</span>
            </div>
          </button>
          <button
            onClick={() => setActiveMode('care')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all relative ${
              activeMode === 'care'
                ? 'bg-white text-teal-800'
                : 'text-white hover:text-teal-200'
            }`}
          >
            <div className="flex items-center space-x-1.5">
              <Heart className="w-3.5 h-3.5" />
              <span>Care</span>
            </div>
            {activeMode === 'coverage' && (
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                2
              </div>
            )}
          </button>
        </div>

        <button className="relative" onClick={() => navigate('/chat')} aria-label="Messages">
          <MessageCircle className="w-6 h-6" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </div>
        </button>
      </div>


      {/* Main Content */}
      <div className="bg-gray-50 text-gray-900 flex-1 rounded-t-3xl mt-4 pb-6 px-4">
        {activeMode === 'care' ? (
          <>
            {/* Today's Appointments - Tabbed Interface */}
            <Tabs defaultValue="today" className="w-full mb-8">
                <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-lg p-1">
                  <TabsTrigger 
                    value="today" 
                    className="relative data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm rounded-md px-3 py-2 text-sm font-medium transition-all"
                  >
                    Today's Appointments
                    <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                      2
                    </div>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="upcoming"
                    className="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm rounded-md px-3 py-2 text-sm font-medium transition-all"
                  >
                    Upcoming Appointments
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="today" className="mt-4 px-4">
                  <div className="mb-4">
                    <p className="text-blue-600 font-semibold">2 appointments</p>
                    <p className="text-gray-600 text-sm">Sessions will be available to join 10 minutes prior to the session start time.</p>
                  </div>
                  
                  <div className="flex space-x-3 overflow-x-hidden">
                    <div className="bg-white rounded-xl p-4 border-2 border-blue-200 relative flex-shrink-0 w-80">
                      <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        Starting soon
                      </div>
                      <div className="flex items-center space-x-3">
                        <img
                          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=50&h=50&fit=crop&crop=face"
                          alt="Doctor profile"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <p className="font-semibold">1:00pm - 1:30pm</p>
                          <p className="text-gray-600 text-sm">Telemedicine Appointment • Video Call</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-gray-200 relative flex-shrink-0 w-80 opacity-60">
                      <div className="flex items-center space-x-3">
                        <img
                          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&fit=crop&crop=face"
                          alt="Doctor profile"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <p className="font-semibold">2:30pm - 3:00pm</p>
                          <p className="text-gray-600 text-sm">Mental Health Session • Video Call</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-2 mt-4">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </TabsContent>
                
                <TabsContent value="upcoming" className="mt-4 px-4">
                  <div className="text-center py-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Upcoming Appointments</h3>
                    <p className="text-gray-600 text-sm mb-6">Book your next appointment to get started</p>
                    
                    <div className="-mx-4 px-4" aria-label="Book appointments">
                      <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory space-x-4 pb-1">
                        {[
                          { label: 'Book a Counselling Session', Icon: Brain },
                          { label: 'Book a Telemed consultation', Icon: Stethoscope },
                          { label: 'Book a Pharmacist consultation', Icon: Pill },
                        ].map(({ label, Icon }) => (
                          <button
                            key={label}
                            className="snap-start shrink-0 w-36 bg-white rounded-2xl border border-gray-200 text-left active:scale-[0.98] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 overflow-hidden shadow-md hover:shadow-lg"
                            aria-label={label}
                          >
                            <div className="relative h-22 flex items-center justify-center">
                              <Icon className="w-16 h-16 text-teal-700 opacity-90" />
                            </div>
                            <div className="p-2">
                              <div className="flex items-center justify-between">
                                <p className="font-semibold text-gray-900 text-sm leading-snug">{label}</p>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                              </div>
                            </div>
                          </button>
                        ))}
                        <div className="shrink-0 w-3" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

            {/* Care Services — Direction 2: edge-to-edge tinted surface, non-sticky heading */}
            <div className="relative -mx-4 mb-8">
              <div className="absolute inset-0 bg-teal-800"></div>
              <div className="relative px-4 py-4 space-y-6 text-white">
                <div className="px-0 mb-2 flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-teal-600/60 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Care Services</h2>
                </div>
                {/* For You */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✨</span>
                    </div>
                    <p className="text-lg text-white font-semibold">For You</p>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Based on your goals</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <Plus className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Personalized Nutrition</p>
                            <p className="text-sm text-gray-600">Tailored meal plans • Expert guidance</p>
                          </div>
                        </div>
                        <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium">Start</button>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                            <Heart className="w-5 h-5 text-pink-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Hormonal Health</p>
                            <p className="text-sm text-gray-600">Specialized care • Personalized approach</p>
                          </div>
                        </div>
                        <button className="bg-pink-600 text-white px-3 py-1 rounded-lg text-sm font-medium">Start</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10" />

                {/* Your Health Journey */}
                <div>
                  <h2 className="text-lg font-semibold mb-2 text-white">Your Health Journey</h2>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <Target className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="font-semibold text-gray-800">Goal Progress</span>
                      </div>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">2 of 3 active</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Stress Management</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div className="w-12 h-2 bg-emerald-500 rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-600">75%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Sleep Quality</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div className="w-8 h-2 bg-purple-500 rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-600">50%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10" />

                {/* Quick Action */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h2 className="text-lg font-semibold text-white">Quick Action</h2>
                  </div>
                  
                  <div className="-mx-4 px-4" aria-label="Quick actions">
                    <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory space-x-4 pb-1">
                      {[
                        { label: 'Add/Transfer a Prescription', Icon: Pill },
                        { label: 'Book a Counselling Session', Icon: Brain },
                        { label: 'Book a Telemed consultation', Icon: Stethoscope },
                        { label: 'Book a Pharmacist consultation', Icon: Pill },
                      ].map(({ label, Icon }) => (
                        <button
                          key={label}
                          className="snap-start shrink-0 w-36 bg-white rounded-2xl border border-white/10 text-left active:scale-[0.98] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 overflow-hidden shadow-md hover:shadow-lg"
                          aria-label={label}
                        >
                          <div className="relative h-22 flex items-center justify-center">
                            <Icon className="w-16 h-16 text-teal-700 opacity-90" />
                          </div>
                          <div className="p-2">
                            <div className="flex items-center justify-between">
                              <p className="font-semibold text-gray-900 text-sm leading-snug">{label}</p>
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            </div>
                          </div>
                        </button>
                      ))}
                      <div className="shrink-0 w-3" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10" />

                {/* Most Popular */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-lg text-white font-semibold">Most Popular</p>
                    <button className="text-teal-200 text-xs font-medium flex items-center space-x-1">
                      <span>View all</span>
                      <ChevronRight className="w-3 h-3 text-teal-200" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Mental Health', Icon: Brain },
                      { label: 'Telemedicine', Icon: Stethoscope },
                      { label: 'Pharmacy', Icon: Pill },
                      { label: 'Well-being', Icon: Heart },
                      { label: 'Total Health and Life Services', Icon: BriefcaseMedical },
                    ].map(({ label, Icon }) => (
                      <div key={label} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-9 h-9 rounded-md bg-white/70 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-teal-700" />
                          </div>
                          <span className="text-sm font-medium text-teal-900">{label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Discover */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Discover</h2>
                <button className="text-blue-600 font-semibold flex items-center space-x-1">
                  <span>View all</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-gradient-to-r from-teal-500 to-cyan-400 rounded-xl p-4 text-white relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-white text-teal-600 text-xs px-2 py-1 rounded font-bold">
                  NEW
                </div>
                <div className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                  <span>✓ Eligible</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Enhance Your Travel Insurance</h3>
                <p className="text-sm mb-3 opacity-90">Through our partnership with SecuriGlobe, we offer reliable and tailored travel insurance solutions for your needs.</p>
                <button className="text-white font-semibold flex items-center space-x-1">
                  <span>Learn more about travel coverage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Pagination dots */}
                <div className="flex justify-center space-x-2 mt-4">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Claims Section */}
            <div className="mb-8 -mx-4 px-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Claims</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Submit Claim</span>
                </button>
              </div>

              <div className="space-y-3">
                <div className="bg-white rounded-none p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-semibold">Annual Physical Exam</p>
                      <p className="text-gray-600 text-sm">Dr. Sarah Johnson • March 15, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">Approved</p>
                      <p className="text-gray-600 text-sm">$0 owed</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-none p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-semibold">Prescription Refill</p>
                      <p className="text-gray-600 text-sm">CVS Pharmacy • March 10, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-blue-600">Processing</p>
                      <p className="text-gray-600 text-sm">$15 copay</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-none p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-semibold">Dental Cleaning</p>
                      <p className="text-gray-600 text-sm">Bright Smile Dental • March 8, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">Approved</p>
                      <p className="text-gray-600 text-sm">$25 copay</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 text-blue-600 font-semibold flex items-center justify-center space-x-1">
                <span>View all claims</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Coverage (dark, edge-to-edge) */}
            <div className="relative -mx-4 mb-8">
              <div className="absolute inset-0 bg-teal-800"></div>
              <div className="relative px-4 py-4 space-y-6 text-white">
                <div className="px-0 mb-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-teal-600/60 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">Coverage</h2>
                  </div>
                  <button className="bg-blue-600 text-white rounded-lg px-3 py-2 text-sm font-semibold flex items-center space-x-2 active:scale-[0.98]">
                    <Search className="w-4 h-4" />
                    <span>Search</span>
                  </button>
                </div>

                <div className="-mx-4 px-4" aria-label="Coverage quick actions">
                  <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory space-x-4 pb-1">
                    {[
                      { label: 'Travel', Icon: Plane, badgeText: 'Popular', badgeColor: 'bg-teal-600' },
                      { label: 'Medication Prior Authorization', Icon: CheckSquare, badgeText: 'New', badgeColor: 'bg-amber-500' },
                      { label: 'Health and Dental', Icon: Heart, badgeText: 'Benefits', badgeColor: 'bg-rose-600' },
                      { label: 'Care Services', Icon: Stethoscope, badgeText: 'Benefits', badgeColor: 'bg-indigo-600' },
                      { label: 'Benefits Booklet', Icon: BookOpen, badgeText: 'PDF', badgeColor: 'bg-sky-600' },
                    ].map(({ label, Icon, badgeText, badgeColor }) => (
                      <button
                        key={label}
                        className="snap-start shrink-0 w-72 bg-white rounded-2xl border border-white/10 text-left active:scale-[0.98] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 overflow-hidden shadow-md hover:shadow-lg"
                        aria-label={label}
                      >
                        <div className="relative h-44 flex items-center justify-center">
                          {badgeText && (
                            <div className={`absolute top-3 left-3 text-white text-[11px] font-semibold px-2.5 py-1 rounded ${badgeColor}`}>
                              {badgeText}
                            </div>
                          )}
                          <Icon className="w-32 h-32 text-teal-700 opacity-90" />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-gray-900 text-base leading-snug">{label}</p>
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                      </button>
                    ))}
                    <div className="shrink-0 w-3" />
                  </div>
                </div>

                <div className="border-t border-white/10" />

                <div className="hidden">
                  <h3 className="text-lg font-semibold text-white mb-2">Spending Account Balances</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* HCSA */}
                    <div className="rounded-2xl p-4 border border-blue-100 bg-blue-50 text-teal-900">
                      <div className="flex items-center">
                        <div className="mr-4">
                          <svg width="96" height="96" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="16" fill="#eaf4ff" />
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#eaf4ff"
                              strokeWidth="4"
                            />
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#0ea5a5"
                              strokeWidth="4"
                              strokeDasharray="0 88"
                              transform="rotate(-90 18 18)"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-teal-800">$0</p>
                          <p className="text-sm text-teal-700">remaining</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="font-semibold">Health Care Spending Account</p>
                        <ChevronRight className="w-5 h-5 text-teal-700" />
                      </div>
                    </div>
                    {/* Personal Spending */}
                    <div className="rounded-2xl p-4 border border-green-100 bg-green-50 text-teal-900">
                      <div className="flex items-center">
                        <div className="mr-4">
                          <svg width="96" height="96" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="16" fill="#ecfdf5" />
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#ffffff"
                              strokeWidth="4"
                            />
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#065f46"
                              strokeWidth="4"
                              strokeDasharray="62 88"
                              transform="rotate(-90 18 18)"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-emerald-900">$956.91</p>
                          <p className="text-sm text-emerald-800">remaining</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="font-semibold">Personal Spending Account</p>
                        <ChevronRight className="w-5 h-5 text-emerald-800" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spending Account Balances (separate light section) */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Spending Account Balances</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl p-4 border border-blue-100 bg-blue-50 text-teal-900">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <svg width="96" height="96" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="#eaf4ff" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#eaf4ff" strokeWidth="4" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#0ea5a5" strokeWidth="4" strokeDasharray="0 88" transform="rotate(-90 18 18)" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-teal-800">$0</p>
                      <p className="text-sm text-teal-700">remaining</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="font-semibold">Health Care Spending Account</p>
                    <ChevronRight className="w-5 h-5 text-teal-700" />
                  </div>
                </div>
                <div className="rounded-2xl p-4 border border-green-100 bg-green-50 text-teal-900">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <svg width="96" height="96" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="#ecfdf5" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#ffffff" strokeWidth="4" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#065f46" strokeWidth="4" strokeDasharray="62 88" transform="rotate(-90 18 18)" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-emerald-900">$956.91</p>
                      <p className="text-sm text-emerald-800">remaining</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="font-semibold">Personal Spending Account</p>
                    <ChevronRight className="w-5 h-5 text-emerald-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits & Services */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Do more with your claims</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-none p-4 border border-gray-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="font-medium mb-1">ID Cards</p>
                  <p className="text-gray-600 text-xs">Add to Apple Wallet or Google Wallet</p>
                </div>

                <div className="bg-white rounded-none p-4 border border-gray-200">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <Search className="w-5 h-5 text-purple-600" />
                  </div>
                  <p className="font-medium mb-1">Provider Search</p>
                  <p className="text-gray-600 text-xs">Providers & Facilities</p>
                </div>

                <div className="bg-white rounded-none p-4 border border-gray-200">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <Pill className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="font-medium mb-1">Personalized claim forms</p>
                  <p className="text-gray-600 text-xs">Prescriptions & Refills</p>
                </div>

                <div className="bg-white rounded-none p-4 border border-gray-200">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                    <MessageCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <p className="font-medium mb-1">Support</p>
                  <p className="text-gray-600 text-xs">24/7 Help Center</p>
                </div>
              </div>
            </div>

            {/* Discover (match Care tab) */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Discover</h2>
                <button className="text-blue-600 font-semibold flex items-center space-x-1">
                  <span>View all</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-gradient-to-r from-teal-500 to-cyan-400 rounded-xl p-4 text-white relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-white text-teal-600 text-xs px-2 py-1 rounded font-bold">
                  NEW
                </div>
                <div className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                  <span>✓ Eligible</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Enhance Your Travel Insurance</h3>
                <p className="text-sm mb-3 opacity-90">Through our partnership with SecuriGlobe, we offer reliable and tailored travel insurance solutions for your needs.</p>
                <button className="text-white font-semibold flex items-center space-x-1">
                  <span>Learn more about travel coverage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="flex justify-center space-x-2 mt-4">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center space-y-1">
            <Home className="w-6 h-6 text-teal-600" />
            <span className="text-xs text-teal-600 font-medium">Home</span>
            <div className="w-8 h-1 bg-teal-600 rounded-full"></div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <FileText className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Benefits</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <MessageCircle className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Services</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <Tag className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Discover</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <Menu className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">More</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
