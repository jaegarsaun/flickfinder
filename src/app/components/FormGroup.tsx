
type FormGroupProps = {
    children: React.ReactNode;
    flexType?: 'row' | 'col';
    className?: string;
}
export default function FormGroup({ children, flexType, className }: FormGroupProps) {
    return (
        <div className={`flex flex-col gap-2 ${flexType === 'row' ? 'md:flex-row' : 'md:flex-col'} ${className}`}>
            {children}
        </div>
    )
}