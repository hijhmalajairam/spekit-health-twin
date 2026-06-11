import { useState, useEffect } from 'react'
import { speksAPI } from '../utils/api'
import { Plus, Trash2, Edit2, Save, X } from 'lucide-react'

const CATEGORIES = ['Getting Started', 'Vitals Tracking', 'AI Predictions', 'Simulator Features', 'Body Map', 'Privacy & Data']

const empty = { title: '', content: '', category: 'Getting Started', tooltip_hint: '' }

export default function Admin() {
  const [speks, setSpeks] = useState([])
  const [form, setForm] = useState(empty)
  const [editing, setEditing] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const load = () => speksAPI.getAll({}).then(r => setSpeks(r.data)).finally(() => setLoading(false))
  useEffect(() => { load() }, [])

  const save = async () => {
    setSaving(true)
    try {
      if (editing) { await speksAPI.update(editing, form); setEditing(null) }
      else { await speksAPI.create(form) }
      setForm(empty); load()
    } finally { setSaving(false) }
  }

  const del = async (id) => {
    if (!confirm('Delete this spek?')) return
    await speksAPI.delete(id); load()
  }

  const startEdit = (s) => { setEditing(s.id); setForm({ title: s.title, content: s.content, category: s.category, tooltip_hint: s.tooltip_hint || '' }) }
  const cancel = () => { setEditing(null); setForm(empty) }

  const inp = { background: '#0a0a12', border: '1px solid #1e1e2e', borderRadius: '8px', padding: '8px 12px', color: '#f0f0f8', fontSize: '13px', outline: 'none', width: '100%', fontFamily: 'Inter' }

  return (
    <div style={{ minHeight: '100vh', background: '#050508', paddingTop: '60px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 24px' }}>

        <div style={{ marginBottom: '28px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'Space Grotesk', color: '#f0f0f8', marginBottom: '6px' }}>Admin Panel</h1>
          <p style={{ fontSize: '14px', color: '#8888aa' }}>Manage knowledge base speks</p>
        </div>

        {/* Form */}
        <div style={{ background: '#111118', border: '1px solid #1e1e2e', borderRadius: '16px', padding: '24px', marginBottom: '28px' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: editing ? '#f59e0b' : '#4f8ef7', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
            {editing ? '✏️ Edit Spek' : '+ New Spek'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
            <input placeholder="Title" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              style={inp} onFocus={e => e.target.style.borderColor = '#4f8ef7'} onBlur={e => e.target.style.borderColor = '#1e1e2e'} />
            <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
              style={{ ...inp, cursor: 'pointer' }}>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <textarea placeholder="Content" value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
            rows={4} style={{ ...inp, resize: 'vertical', marginBottom: '12px', display: 'block' }}
            onFocus={e => e.target.style.borderColor = '#4f8ef7'} onBlur={e => e.target.style.borderColor = '#1e1e2e'} />
          <input placeholder="Tooltip hint (optional)" value={form.tooltip_hint} onChange={e => setForm(f => ({ ...f, tooltip_hint: e.target.value }))}
            style={{ ...inp, marginBottom: '16px' }} onFocus={e => e.target.style.borderColor = '#4f8ef7'} onBlur={e => e.target.style.borderColor = '#1e1e2e'} />
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={save} disabled={saving || !form.title || !form.content} style={{
              background: '#4f8ef7', color: '#fff', border: 'none', borderRadius: '8px',
              padding: '10px 20px', fontSize: '13px', fontWeight: 700, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '6px', opacity: (!form.title || !form.content) ? 0.5 : 1
            }}>
              <Save size={14} /> {saving ? 'Saving...' : editing ? 'Update' : 'Create'}
            </button>
            {editing && (
              <button onClick={cancel} style={{ background: '#111118', color: '#8888aa', border: '1px solid #1e1e2e', borderRadius: '8px', padding: '10px 16px', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <X size={14} /> Cancel
              </button>
            )}
          </div>
        </div>

        {/* List */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#44445a' }}>Loading...</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {speks.map(s => (
              <div key={s.id} style={{
                background: editing === s.id ? 'rgba(245,158,11,0.05)' : '#111118',
                border: `1px solid ${editing === s.id ? 'rgba(245,158,11,0.3)' : '#1e1e2e'}`,
                borderRadius: '12px', padding: '16px 20px',
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px'
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#f0f0f8' }}>{s.title}</span>
                    <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '20px', background: 'rgba(79,142,247,0.1)', border: '1px solid rgba(79,142,247,0.2)', color: '#4f8ef7', fontWeight: 600 }}>{s.category}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#8888aa', lineHeight: 1.5, marginBottom: s.tooltip_hint ? '6px' : 0 }}>
                    {s.content.length > 120 ? s.content.slice(0, 120) + '...' : s.content}
                  </p>
                  {s.tooltip_hint && <p style={{ fontSize: '11px', color: '#4f8ef7' }}>💡 {s.tooltip_hint}</p>}
                </div>
                <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                  <button onClick={() => startEdit(s)} style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', color: '#f59e0b', borderRadius: '8px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Edit2 size={12} /> Edit
                  </button>
                  <button onClick={() => del(s.id)} style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444', borderRadius: '8px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Trash2 size={12} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
