import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="site-container" style={{display:'flex',flexDirection:'column',gap:16,padding:'24px 0',alignItems:'center',textAlign:'center'}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
                    <h4 style={{color:'#fff',fontSize:18,fontWeight:700,margin:0}}>Muscle Classics</h4>
                    <p className="small" style={{margin:0,color:'#cbd5e1'}}>
                        Premium restoration, builds and protection services for classic muscle cars. © {new Date().getFullYear()} Muscle Classics
                    </p>
                </div>

                <div>
                    <h5 style={{fontWeight:700}}>Subscribe</h5>
                    <p className="small" style={{marginTop:8}}>Get inventory drops and shop updates in your inbox.</p>
                    <form style={{marginTop:10,display:'flex',gap:8,flexWrap:'wrap'}}>
                        <input type="email" placeholder="Email address" style={{flex:1,minWidth:220,padding:8,borderRadius:6,border:'1px solid #253047',background:'#071327',color:'#cbd5e1'}} />
                        <button type="submit" style={{background:'#f6c23e',border:'none',padding:'8px 12px',borderRadius:6,minWidth:120}}>Subscribe</button>
                    </form>
                </div>
            </div>

            <div style={{borderTop:'1px solid rgba(255,255,255,0.04)'}}>
                <div className="site-container" style={{padding:'12px 0',textAlign:'center'}}>
                    <span className="small">Designed with care • Terms • Privacy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;