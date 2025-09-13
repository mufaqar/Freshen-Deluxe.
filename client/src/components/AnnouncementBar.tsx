import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface AnnouncementBarProps {
  message: string;
  actionText?: string;
  onAction?: () => void;
  dismissible?: boolean;
}

export default function AnnouncementBar({ 
  message, 
  actionText, 
  onAction, 
  dismissible = true 
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">{message}</span>
          {actionText && onAction && (
            <Button
              variant="outline"
              size="sm"
              onClick={onAction}
              className="text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
              data-testid="button-announcement-action"
            >
              {actionText}
            </Button>
          )}
        </div>
        {dismissible && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/10"
            data-testid="button-dismiss-announcement"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}