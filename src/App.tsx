import './App.css'
import { Bell, ChevronRight, Home, FileText, Tag, Menu, Plus, Pill, MessageCircle, Search, Shield, Heart, Target, Brain, Stethoscope, BriefcaseMedical } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useNotifications } from '@/context/NotificationsContext'

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
      <div className="bg-gray-50 text-gray-900 flex-1 rounded-t-3xl mt-4 px-4 py-6">
        {activeMode === 'care' ? (
          <>
            {/* Today's Appointments */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Today's Appointments</h2>
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
                
                {/* Peek of next appointment card */}
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
              
              {/* Pagination dots */}
              <div className="flex justify-center space-x-2 mt-4">
                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Care Services — Direction 2: edge-to-edge tinted surface, non-sticky heading */}
            <div className="px-4 mb-8">
              <div className="-mx-4 bg-teal-800 text-white ring-1 ring-teal-700/60 px-4 py-4 space-y-6">
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
                  <div className="space-y-2">
                    {[
                      'Add/Transfer a Prescription',
                      'Book a Counselling Session',
                      'Book a Telemed consultation',
                      'Book a Pharmacist consultation',
                    ].map((label) => (
                      <button
                        key={label}
                        className="w-full bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between active:scale-[0.98] transition"
                      >
                        <span className="text-sm font-medium text-gray-800">{label}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                    ))}
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
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Claims</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Submit Claim</span>
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
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
                
                <div className="bg-white rounded-xl p-4 border border-gray-200">
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
                
                <div className="bg-white rounded-xl p-4 border border-gray-200">
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

            {/* Coverage Summary */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Coverage Summary</h2>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-lg">Health Plan Active</p>
                    <p className="text-gray-600 text-sm">Premium Plan • Family Coverage</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">Deductible</p>
                    <p className="font-semibold">$500 / $1,500</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Out-of-pocket max</p>
                    <p className="font-semibold">$2,000 / $6,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits & Services */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Benefits & Services</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="font-medium mb-1">ID Cards</p>
                  <p className="text-gray-600 text-xs">Digital & Physical</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <Search className="w-5 h-5 text-purple-600" />
                  </div>
                  <p className="font-medium mb-1">Find Care</p>
                  <p className="text-gray-600 text-xs">Providers & Facilities</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <Pill className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="font-medium mb-1">Pharmacy</p>
                  <p className="text-gray-600 text-xs">Prescriptions & Refills</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                    <MessageCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <p className="font-medium mb-1">Support</p>
                  <p className="text-gray-600 text-xs">24/7 Help Center</p>
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
              
              <div className="flex space-x-3 overflow-x-hidden">
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-4 text-white relative overflow-hidden flex-shrink-0 w-80">
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">
                    FREE
                  </div>
                  <h3 className="text-lg font-bold mb-2">Wellness Program</h3>
                  <p className="text-sm mb-3 opacity-90">Join our wellness program and earn rewards for healthy activities.</p>
                  <button className="text-white font-semibold flex items-center space-x-1">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Peek of next card */}
                <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-xl p-4 text-white relative overflow-hidden flex-shrink-0 w-80 opacity-60">
                  <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">
                    -20%
                  </div>
                  <h3 className="text-lg font-bold mb-2">Fitness Tracker</h3>
                  <p className="text-sm mb-3 opacity-90">Get 20% off fitness trackers to monitor your health goals.</p>
                  <button className="text-white font-semibold flex items-center space-x-1">
                    <span>Shop now</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
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
