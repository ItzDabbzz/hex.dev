import Link from 'next/link';
import LinkButton from './LinkButton';
import { FaDiscord, FaGithub, FaSteam, FaTelegram, FaTiktok } from 'react-icons/fa';
import { GiMinigun } from 'react-icons/gi';
import { SiRoblox, SiFivem } from 'react-icons/si';
import { MdOutlineSignalWifiStatusbarNull } from 'react-icons/md';

interface CombinedLinksProps {
  onCopyToClipboard: (text: string, title: string, type?: string) => void;
}

export default function CombinedLinks({ onCopyToClipboard }: CombinedLinksProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
      {/* Personal Section */}
      <div>
        <h2 className="text-xl font-semibold text-[#c0caf5] mb-3 text-center">Personal</h2>
        <br/>
        <div className="h-px bg-[#333] mb-5"></div>
        <br/>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">          
            <LinkButton
              href="https://guns.lol/hexdev"
              icon={<GiMinigun />}
              label="guns.lol"
              iconColor="text-[#8080FF]"
            />
            
            <LinkButton
              onClick={() => onCopyToClipboard('_hexdev_', 'Discord Username Copied!', 'discord')}
              icon={<FaDiscord />}
              label="Discord"
              iconColor="text-[#7289DA]"
            />
            
            <LinkButton
              href="https://www.tiktok.com/@hex_dev_nerd"
              icon={<FaTiktok />}
              label="TikTok"
              iconColor="text-[#FFFFFF]"
            />

            <LinkButton
              href="https://www.roblox.com/users/249893836/profile"
              icon={<SiRoblox />}
              label="Roblox"
              iconColor="text-[#FF1B1B]"
            />
          </div>
          
          <div className="flex flex-col gap-3">
            <LinkButton
              href="https://github.com/yourusername"
              icon={<FaGithub />}
              label="Github"
              iconColor="text-white"
            />
            
            <LinkButton
              href="https://t.me/hexdev0x0"
              icon={<FaTelegram />}
              label="Telegram"
              iconColor="text-[#24A1DE]"
            />

            <LinkButton
              href="https://steamcommunity.com/profiles/76561198836596654"
              icon={<FaSteam />}
              label="Steam"
              iconColor="text-[#24A1DE]"
            />
          </div>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="hidden lg:flex justify-center px-4">
        <div className="w-px bg-[#333] h-full min-h-[180px]"></div>
      </div>

      {/* Projects Section */}
      <div>
        <h2 className="text-xl font-semibold text-[#c0caf5] mb-3 text-center">Projects</h2><br/>
        <div className="h-px bg-[#333] mb-5"></div><br/>
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
    </div>
  );
}
