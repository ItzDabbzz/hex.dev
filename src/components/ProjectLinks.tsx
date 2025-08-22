import { SiFivem } from 'react-icons/si';
import LinkButton from './LinkButton';
import { MdOutlineSignalWifiStatusbarNull } from 'react-icons/md';

export default function ProjectLinks() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#c0caf5] mb-3 text-center">Projects</h2>
      <div className="h-px bg-[#333] mb-4"></div>
      <div className="flex flex-col gap-3">
        <LinkButton
          href="https://discord.gg/wethepeoplerp"
          icon={<SiFivem />}
          label="We The People RP"
          iconColor="text-[#808080]"
        />
        
        <LinkButton
          href="https://status.wethepeoplerp.com/"
          icon={<MdOutlineSignalWifiStatusbarNull />}
          label="We The People Status"
          iconColor="text-[#ff9e64]"
        />
        
      </div>
    </div>
  );
}
