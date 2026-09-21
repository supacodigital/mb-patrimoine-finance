import './Skeleton.css'

export function Skeleton({ width, height, borderRadius, className = '' }) {
  const style = {}
  if (width) style.width = width
  if (height) style.height = height
  if (borderRadius) style.borderRadius = borderRadius

  return <div className={`skeleton ${className}`} style={style} />
}

export function ServiceCardSkeleton() {
  return (
    <div className="skeleton-service-card">
      <Skeleton width="52px" height="52px" borderRadius="8px" className="skeleton--mb" />
      <Skeleton height="20px" width="70%" borderRadius="6px" className="skeleton--mb-sm" />
      <Skeleton height="14px" width="100%" borderRadius="4px" className="skeleton--mb-xs" />
      <Skeleton height="14px" width="90%" borderRadius="4px" className="skeleton--mb-xs" />
      <Skeleton height="14px" width="80%" borderRadius="4px" />
    </div>
  )
}

export function PortfolioCardSkeleton() {
  return (
    <div className="skeleton-portfolio-card">
      <Skeleton height="200px" borderRadius="0" />
      <div className="skeleton-portfolio-card__content">
        <Skeleton height="18px" width="75%" borderRadius="6px" className="skeleton--mb-sm" />
        <Skeleton height="13px" width="100%" borderRadius="4px" className="skeleton--mb-xs" />
        <Skeleton height="13px" width="85%" borderRadius="4px" />
      </div>
    </div>
  )
}

export function TestimonialCardSkeleton() {
  return (
    <div className="skeleton-testimonial-card">
      <Skeleton height="16px" width="100px" borderRadius="4px" className="skeleton--mb" />
      <Skeleton height="14px" width="100%" borderRadius="4px" className="skeleton--mb-xs" />
      <Skeleton height="14px" width="100%" borderRadius="4px" className="skeleton--mb-xs" />
      <Skeleton height="14px" width="70%" borderRadius="4px" className="skeleton--mb" />
      <div className="skeleton-testimonial-card__author">
        <Skeleton width="44px" height="44px" borderRadius="50%" />
        <div className="skeleton-testimonial-card__author-info">
          <Skeleton height="14px" width="120px" borderRadius="4px" className="skeleton--mb-xs" />
          <Skeleton height="12px" width="90px" borderRadius="4px" />
        </div>
      </div>
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader__spinner">
        <div className="page-loader__ring" />
      </div>
    </div>
  )
}
