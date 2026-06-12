import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Brain, BookOpen, Activity, LayoutDashboard, History, LogOut, User, Gamepad2, Languages, Settings } from 'lucide-react'

const links = [
  { to: '/',           labelKey: 'Home',         icon: Activity },
  { to: '/knowledge',  labelKey: 'Knowledge',    icon: BookOpen },
  { to: '/simulator',  labelKey: 'Simulator',    icon: Brain },
  { to: '/braingames', labelKey: 'BrainGames',   icon: Gamepad2 },
  { to: '/history',    labelKey: 'History',      icon: History },
  { to: '/admin',      labelKey: 'Admin',        icon: LayoutDashboard },
]

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी (Hindi)' },
  { code: 'bn', name: 'বাংলা (Bengali)' },
  { code: 'mr', name: 'मराठी (Marathi)' },
  { code: 'te', name: 'తెలుగు (Telugu)' },
  { code: 'ta', name: 'தமிழ் (Tamil)' },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
  { code: 'ur', name: 'اردو (Urdu)' }
]

export default function Navbar() {
  const { pathname } = useLocation()
  const nav = useNavigate()
  const { t, i18n } = useTranslation()
  const user = JSON.parse(localStorage.getItem('ht_user') || 'null')

  const [showSettings, setShowSettings] = useState(false)
  const [groqKey, setGroqKey] = useState(localStorage.getItem('ht_groq_key') || '')
  const [geminiKey, setGeminiKey] = useState(localStorage.getItem('ht_gemini_key') || '')

  const logout = () => {
    localStorage.removeItem('ht_user')
    nav('/login')
  }

  const saveApiKeys = () => {
    localStorage.setItem('ht_groq_key', groqKey)
    localStorage.setItem('ht_gemini_key', geminiKey)
    setShowSettings(false)
    window.location.reload()
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(5,5,8,0.85)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px', height: '60px'
      }}>
        <Link to="/" style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          textDecoration: 'none', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: 'var(--text-primary)'
        }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '8px', background: 'var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px'
          }}>⚕</div>
          HealthTwin
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          {links.map(({ to, labelKey, icon: Icon }) => {
            const active = pathname === to
            return (
              <Link key={to} to={to} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 500,
                textDecoration: 'none', transition: 'all 0.15s',
                background: active ? 'var(--accent-dim)' : 'transparent',
                color: active ? 'var(--accent)' : 'var(--text-secondary)',
                border: active ? '1px solid rgba(79,142,247,0.25)' : '1px solid transparent'
              }}>
                <Icon size={14} />
                {t(labelKey)}
              </Link>
            )
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <Languages size={14} color="var(--text-secondary)" />
            <select 
              value={i18n.language} 
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', fontSize: '13px', outline: 'none', cursor: 'pointer' }}
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code} style={{ background: '#0a0a0f', color: '#fff' }}>{lang.name}</option>
              ))}
            </select>
          </div>

          <button onClick={() => setShowSettings(true)} style={{ background: 'transparent', border: '1px solid var(--border-bright)', borderRadius: '8px', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Settings size={14} color="var(--text-secondary)" />
          </button>

          {user ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  background: 'var(--accent-dim)', border: '1px solid var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <User size={13} color='var(--accent)' />
                </div>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {user.name}
                </span>
              </div>
              <button onClick={logout} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                background: 'transparent', border: '1px solid var(--border-bright)',
                borderRadius: '8px', padding: '6px 12px', cursor: 'pointer',
                color: 'var(--text-secondary)', fontSize: '13px', transition: 'all 0.15s'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-bright)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                <LogOut size={13} /> {t('Logout')}
              </button>
            </>
          ) : (
            <Link to="/login" style={{
              background: 'var(--accent)', color: '#fff', borderRadius: '8px',
              padding: '6px 16px', fontSize: '13px', fontWeight: 600,
              textDecoration: 'none'
            }}>{t('SignIn')}</Link>
          )}
        </div>
      </nav>

      {showSettings && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#0b0b12', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', width: '400px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '16px', fontFamily: 'Space Grotesk' }}>{t('Settings')}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '12px', marginBottom: '20px' }}>{t('CustomKeys')} (Leave blank to use global models)</p>
            
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '12px', marginBottom: '6px' }}>Groq API Key</label>
              <input type="password" value={groqKey} onChange={e => setGroqKey(e.target.value)} placeholder="gsk_..." style={{ width: '100%', padding: '8px 12px', background: '#050508', border: '1px solid var(--border)', borderRadius: '6px', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '12px', marginBottom: '6px' }}>Gemini API Key</label>
              <input type="password" value={geminiKey} onChange={e => setGeminiKey(e.target.value)} placeholder="AIzaSy..." style={{ width: '100%', padding: '8px 12px', background: '#050508', border: '1px solid var(--border)', borderRadius: '6px', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={() => setShowSettings(false)} style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-secondary)', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>{t('Close')}</button>
              <button onClick={saveApiKeys} style={{ background: 'var(--accent)', border: 'none', color: '#fff', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>{t('Save')}</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}